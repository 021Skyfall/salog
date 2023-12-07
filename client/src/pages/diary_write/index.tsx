import React, { useState } from "react";
import { SvgIcon } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import dateAsKor from "src/utils/dateAsKor";
import { styled } from "styled-components";
import { Input } from "../login";

const DiaryWrite = () => {
	const [categories, setCategories] = useState<string[]>([]);
	console.log(categories);

	const [category, setCategory] = useState<string>("");

	const onChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCategory(e.target.value);
	};

	const onKeyPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const inputElement = e.target as HTMLInputElement;
		if (inputElement.value.trim() !== "" && inputElement.value !== ",") {
			if (e.key === ",") {
				setCategories([
					...categories,
					inputElement.value.slice(0, inputElement.value.length - 1).trim(),
				]);
				setCategory("");
			}
			if (e.key === "Enter") {
				setCategories([...categories, inputElement.value.trim()]);
				setCategory("");
			}
		}
	};

	const onClickTagBtn = (idx: number) => {
		setCategories([...categories.slice(0, idx), ...categories.slice(idx + 1)]);
	};

	const nowDate = dateAsKor(new Date().toDateString());
	return (
		<Container>
			<WriteContainer>
				<div className="header">
					<h3>{nowDate}</h3>
					<div className="header_btn">
						<button>작성 취소</button>
						<button>작성 완료</button>
					</div>
				</div>
				<h4>제목</h4>
				<Input placeholder="제목을 입력하세요." />
				<h4>카테고리</h4>
				<CategoryList>
					{categories.map((category: string, idx: number) => {
						return (
							// key는 서버 연동 후 id가 생기면 변경 예정
							<span key={Math.floor(Math.random() * 1000000000000000)}>
								<p>{category}</p>
								<button
									onClick={() => {
										onClickTagBtn(idx);
									}}
								>
									<SvgIcon
										component={ClearOutlinedIcon}
										sx={{ stroke: "#ffffff", strokeWidth: 0.7 }}
									/>
								</button>
							</span>
						);
					})}
					<Input
						placeholder={
							categories.length === 0 ? "카테고리를 입력하세요." : ""
						}
						onChange={onChangeCategory}
						onKeyUp={onKeyPressEnter}
						value={category}
					/>
				</CategoryList>
			</WriteContainer>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	height: 90vh;
	overflow: scroll;
`;

const WriteContainer = styled.div`
	width: 65%;
	margin-top: 3rem;

	.header {
		display: flex;
		justify-content: space-between;
		margin-bottom: 3rem;

		h3 {
			font-size: 2rem;
			color: ${(props) => props.theme.COLORS.GRAY_600};
		}

		.header_btn > button {
			font-size: 1.2rem;
			background-color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
			color: ${(props) => props.theme.COLORS.WHITE};
			border-radius: 0.4rem;
			padding: 0.8rem 3.5rem;
			&:first-child {
				background-color: ${(props) => props.theme.COLORS.GRAY_300};
				color: ${(props) => props.theme.COLORS.GRAY_600};
				margin-right: 1.5rem;
			}
		}
	}

	h4 {
		font-size: 1.6rem;
		color: ${(props) => props.theme.COLORS.GRAY_600};
		margin-bottom: 1.5rem;
		margin-top: 1.5rem;
	}

	input {
		border-radius: 0.2rem;
		height: 3.6rem;
	}
`;

const CategoryList = styled.div`
	display: flex;
	margin-bottom: 1.5rem;
	padding: 0.4rem 0.7rem;
	border: 1px solid ${(props) => props.theme.COLORS.GRAY_400};

	span {
		display: flex;
		align-items: center;
		border-radius: 1.5rem;
		white-space: nowrap;
		border: none;
		margin-right: 0.6rem;
		padding: 0 0.8rem;
		background-color: ${(props) => props.theme.COLORS.GRAY_200};

		p {
			color: ${(props) => props.theme.COLORS.LIGHT_BLUE};
			font-size: 1.2rem;
			font-weight: 500;
		}

		button {
			margin-left: 0.3rem;

			svg {
				position: relative;
				font-size: 1.2rem;
				top: 0.15rem;
			}
		}
	}

	input {
		padding-left: 0.3rem;
		border-radius: 0.2rem;
		height: 2.6rem;
		border: none;
	}
`;

export default DiaryWrite;
