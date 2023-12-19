package com.codemouse.salog.tags.repository;

import com.codemouse.salog.members.entity.Member;
import com.codemouse.salog.tags.entity.DiaryTag;
import com.codemouse.salog.tags.entity.DiaryTagLink;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DiaryTagLinkRepository extends JpaRepository<DiaryTagLink, Long> {
    List<DiaryTagLink> findByDiaryTagTagNameAndDiaryTagMember(String tagName, Member member);
    Long countByDiaryTag(DiaryTag diaryTag);
}
