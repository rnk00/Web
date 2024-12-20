import {useEffect, useState} from 'react';
import {axiosInstance} from '../apis/axios-instance';  // axios-instance를 그대로 사용

const APIurl = {
    "now-playing": `/movie/now_playing?language=ko-kr&page=1`, 
    "popular": `/movie/popular?language=ko-kr&page=1`, // 왜 popular에서만 에러가 뜨지?%%%
    "top-rated": `/movie/top_rated?language=ko-kr&page=1`,
    "up-coming": `/movie/upcoming?language=ko-kr&page=1`
};

const useCustomFetch = (category) => { // category 말고 url 받는 걸로 만들고 싶은데%%%
    const [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => { 
            setIsLoading(true);
            try {
                const response = await axiosInstance.get(APIurl[category]); 
                setData(response.data.results); // 받아온 데이터로 상태 업데이트
            } catch (error) {
                setIsError(error);
            } finally {
                setIsLoading(false);
            }
        };

        if (category) {
            fetchData();
        }
    }, [category]);

    return {data, isLoading, isError};
}

export {useCustomFetch};
