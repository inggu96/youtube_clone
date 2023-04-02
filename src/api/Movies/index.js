import apiClient from "../apiClient";

// top10 영화 불러오기
export const getMoviesTop = (id) => {
  return apiClient.get(`/movies/${id}/top`);
};
// 영화 전체 개수 불러오기
export const getMoviesCount = () => {
  return apiClient.get("/movies/count");
};

// 영화 자세히 불러오기
export const getMovie = (id) => {
  return apiClient.get(`/movies/${id}/detail`);
};

// 내가 좋아요 한 영화 불러오기
export const getMoviesMeLike = (id) => {
  return apiClient.get(`/movies/me/like`);
};

// 연관된 영화 불러오기
export const getMoviesRelated = (id) => {
  return apiClient.get(`/movies/${id}/related`);
};

// 영화목록 불러오기
export const getMovies = (page, limit) => {
  return apiClient.get(`/movies?page=${page}&limit=${limit}`);
};
