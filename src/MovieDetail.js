// import Circlebar from "./Circlebar";
import LibCircle from "./LibCircle";

const MovieDetail = ({info, onClose}) => {
    const style = {
        backgroundImage : `url(https://image.tmdb.org/t/p/w342${info.backdrop_path})`,
        backgroundSize : 'cover',
        backgroundPosition: 'center'
    };
    // 닫기버튼 꼭 추가하기
    //타이틀, 이미지, 개봉일, 평점, 줄거리, 닫기(= isModalOpen)
    return (
        <div className="movie-detail">
            <button onClick={onClose}>X</button>
            <div className="popup" style={style}>
            <h2>{info.title}</h2>
            {/* <img src={`https://image.tmdb.org/t/p/w342${info.backdrop_path}`} alt={info.title}/> */}
            <div className="p">
            <p>개봉일 : {info.release_date}</p>
            <p>평점</p>
            <LibCircle percentage ={Math.floor(info.vote_average*10)}/>
            {/* <p>평점 : {info.vote_average}</p> */}
            {/* <Circlebar percentage = {info.vote_average*10}/> */}
            <p>줄거리 : {info.overview}</p>
            </div>
        </div>
    </div>
    );
};

export default MovieDetail;