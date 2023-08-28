import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json()); //

export const usePosts = (id) => {
  const { data, error, isLoading } = useSWR(`/api/posts`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
