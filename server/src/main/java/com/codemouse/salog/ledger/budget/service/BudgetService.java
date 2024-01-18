package com.codemouse.salog.ledger.budget.service;

import com.codemouse.salog.auth.jwt.JwtTokenizer;
import com.codemouse.salog.exception.BusinessLogicException;
import com.codemouse.salog.exception.ExceptionCode;
import com.codemouse.salog.ledger.budget.dto.BudgetDto;
import com.codemouse.salog.ledger.budget.entity.MonthlyBudget;
import com.codemouse.salog.ledger.budget.mapper.BudgetMapper;
import com.codemouse.salog.ledger.budget.repository.BudgetRepository;
import com.codemouse.salog.members.entity.Member;
import com.codemouse.salog.members.service.MemberService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.YearMonth;
import java.util.Arrays;
import java.util.Optional;

@AllArgsConstructor
@Service
@Transactional
@Slf4j
public class BudgetService {
    private final BudgetRepository budgetRepository;
    private final BudgetMapper budgetMapper;
    private final MemberService memberService;
    private final JwtTokenizer jwtTokenizer;

    public void createBudget(String token, BudgetDto.Post budgetPostDto) {
        MonthlyBudget budget = budgetMapper.budgetPostDtoToBudget(budgetPostDto);

        Member member = memberService.findVerifiedMember(jwtTokenizer.getMemberId(token));
        budget.setMember(member);

        budgetRepository.save(budget);
    }

    public void updateBudget(String token, long budgetId, BudgetDto.Patch budgetPatchDto) {
        MonthlyBudget budget = budgetMapper.budgetPatchDtoToBudget(budgetPatchDto);
        MonthlyBudget findBudget = findVerifiedBudget(budgetId);
        memberService.verifiedRequest(token, findBudget.getMember().getMemberId());

        Optional.of(budget.getDate())
                .ifPresent(findBudget::setDate);
        Optional.of(budget.getBudget())
                .ifPresent(findBudget::setBudget);

        budgetRepository.save(findBudget);
    }

    public BudgetDto.Response findBudget(String token, String date) {
        long memberId = jwtTokenizer.getMemberId(token);

        int[] arr = Arrays.stream(date.split("-")).mapToInt(Integer::parseInt).toArray();
        int year = arr[0];
        int month = arr[1];

        //todo 2024-01-17 지출 월별 합계 계산 내용 포함되어야함
        BudgetDto.Response response =
                budgetMapper.budgetToBudgetResponseDto(budgetRepository.findByMonth(memberId, year, month));
        response.setDayRemain(YearMonth.now().lengthOfMonth() - LocalDate.now().getDayOfMonth());

        return response;
    }

    public void deleteBudget(String token, long budgetId) {
        MonthlyBudget budget = findVerifiedBudget(budgetId);
        memberService.verifiedRequest(token, budget.getMember().getMemberId());

        budgetRepository.delete(budget);
    }

    private MonthlyBudget findVerifiedBudget(long budgetId) {
        return budgetRepository.findById(budgetId)
                .orElseThrow(
                        () -> new BusinessLogicException(ExceptionCode.BUDGET_NOT_FOUND)
                );
    }
}
