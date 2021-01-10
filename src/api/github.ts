import axios from 'axios';

export async function getUserProfile(username: string) {
  // Generic 을 통해 응답 데이터의 타입을 설정할 수 있습니다.
  const response = await axios.get<GithubProfile>(
    `https://api.github.com/users/${username}`
  );
  return response.data;  // 데이터 값을 바로 반환하도록 처리합니다.
}

export interface GithubProfile {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  received_events_url: string;
  type:                string;
  site_admin:          boolean;
  name:                string;
  company:             null;
  blog:                string;
  location:            null;
  email:               null;
  hireable:            null;
  bio:                 string;
  twitter_username:    null;
  public_repos:        number;
  public_gists:        number;
  followers:           number;
  following:           number;
  created_at:          Date;
  updated_at:          Date;
}

/*

{
  "login": "velopert",
  "id": 17202261,
  "node_id": "MDQ6VXNlcjE3MjAyMjYx",
  "avatar_url": "https://avatars0.githubusercontent.com/u/17202261?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/velopert",
  "html_url": "https://github.com/velopert",
  "followers_url": "https://api.github.com/users/velopert/followers",
  "following_url": "https://api.github.com/users/velopert/following{/other_user}",
  "gists_url": "https://api.github.com/users/velopert/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/velopert/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/velopert/subscriptions",
  "organizations_url": "https://api.github.com/users/velopert/orgs",
  "repos_url": "https://api.github.com/users/velopert/repos",
  "events_url": "https://api.github.com/users/velopert/events{/privacy}",
  "received_events_url": "https://api.github.com/users/velopert/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Minjun Kim",
  "company": "@laftel-team ",
  "blog": "https://velopert.com/",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "개발은 언제나 즐겁고 재밌어야 한다는 생각을 갖고 있는 개발자이며, 가르치는것을 굉장히 좋아하는 교육자이기도 합니다.",
  "twitter_username": null,
  "public_repos": 71,
  "public_gists": 31,
  "followers": 1792,
  "following": 17,
  "created_at": "2016-02-12T16:43:22Z",
  "updated_at": "2021-01-06T22:19:46Z"
}

https://api.github.com/users/velopert

bio: short biography
*/
