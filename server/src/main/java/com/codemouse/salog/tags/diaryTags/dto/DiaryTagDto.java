package com.codemouse.salog.tags.diaryTags.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Size;


public class DiaryTagDto {
    @AllArgsConstructor
    @Getter
    public static class Post {
        @Size(min = 1, max = 10)
        private String tagName;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long diaryTagId;
        private String tagName;
    }
}
