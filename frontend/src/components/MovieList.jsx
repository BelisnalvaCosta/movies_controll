
const MovieList = () => {

    const [movies, setMovies] = useState([])

    useEffect(async () => {
        const url = "http://localhost:5000/movies";
        const res = await fetch(url);
        setMovies(await res.json());
    }, [])

    return
    <table className="striped">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Tipo</th>
                <th>Episodio</th>
                <th>Episodio atual</th>
                <th>Visto por útimo</th>                
            </tr>
        </thead>

        <tbody>
            {movies.map(movies => {
                let type = movie.type === 0 ? 'Série' : 'Filme';
                let formatdate = (movie.last_view).split('T, 1')

                return (
                    <tr key={movie.id}>
                        <td>{movie.name}</td>
                        <td>{type}</td>
                        <td>{movie.total_episodio}</td>
                        <td>{movie.atual_episodio}</td>
                        <td>{formatdate}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>

}