import { BlogDetail, BlogPost } from "@/types/blog";
import { discussionDetailGql, discussionGql } from "./graphQL";

const API_URL = "https://api.github.com/graphql";
const GITHUB_ACCESSTOKEN = process.env.GITHUB_ACCESSTOKEN;
const DISCUSSION_CATEGORY_ID = process.env.DISCUSSION_CATEGORY_ID;

export const getBlogs = async (): Promise<BlogPost[]> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `token ${GITHUB_ACCESSTOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: discussionGql(DISCUSSION_CATEGORY_ID) }),
  });
  const respone = await res.json();
  const discussions = respone.data.repository.discussions.nodes;
  const posts = discussions.map((discussion: any): BlogPost => {
    const {
      title,
      url: discussionUrl,
      number: id,
      bodyHTML: html,
      bodyText,
      createdAt,
      lastEditedAt,
      author,
      labels,
    } = discussion;
    const url = `/blog/${id}`;
    const authorUrl = author.url;
    const authorName = author.login;
    const authorAvatar = author.avatarUrl;
    const tags: string[] = labels.nodes.map((tag: { name: string }) => {
      return tag.name;
    });
    const post = {
      id,
      url,
      discussionUrl,
      title,
      html,
      bodyText,
      tags,
      createdAt,
      lastEditedAt,
      author: {
        url: authorUrl,
        name: authorName,
        avatar: authorAvatar,
      },
    };
    return post;
  });
  return posts;
};

export const getBlogDetail = async (blogId: number): Promise<BlogDetail> => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `token ${GITHUB_ACCESSTOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: discussionDetailGql(blogId)}),
  });
  const respone = await res.json()
  const discussion = await respone.data.repository.discussion
  const {
    author: { url: authorUrl, login: authorName, avatarUrl: authorAvatar },
    title: title,
    bodyHTML: html,
    createdAt,
  } = discussion
  const detail = {
    author: {url: authorUrl, name: authorName, avatar: authorAvatar},
    createdAt,
    title,
    bodyHTML: html,
  }
  return detail
};
