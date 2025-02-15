import Card from '../../components/Card/card.jsx'; 
import * as S from './movie.style.js'; 
import { useParams } from 'react-router-dom'; 
import { useCustomFetch } from '../../hooks/useCustomFetch.js';

const MoviePage = () => {
    const {category} = useParams();
    const {data, isLoading, isError} = useCustomFetch(category);  // category만 전달

    if (isLoading) {
        return <p>로딩 중...</p>;
    }
    if (isError) {
        return <p>에러 발생!</p>;
    }

    return (
        <S.CardList>
            {
                data.map((movie) => (
                <Card key={movie.id} movie={movie} /> // 각 영화 정보를 Card 컴포넌트에 전달하여 렌더링
            ))
        }
        </S.CardList>
    );
};

export default MoviePage;


