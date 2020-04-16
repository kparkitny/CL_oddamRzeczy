import React, { useEffect, useState } from "react";
import "./style.scss";
import decorationImgHelpTo from '../../../assets/Decoration.svg';

const HelpTo = () => {
    const [posts, setPosts] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(3);
    const [listToPagination, setListToPagination] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/profile`)
            .then((res) => res.json())
            .then((res) => setPosts(res))
    }, [])

    // filtry dla poszczególnych btnów
    const foundationFilter = () => {
        const foundationFiltered = posts.filter(function (el, index, arr) {
            return el.type === "Fundacja";
        })
        setCurrentPage(1);
        setListToPagination(foundationFiltered);
    }
    const organizationFilter = () => {
        const organizationFiltered = posts.filter(function (el, index, arr) {
            return el.type === "Organizacja";
        })
        setCurrentPage(1);
        setListToPagination(organizationFiltered);
    }
    const collectionFilter = () => {
        const collectionFiltered = posts.filter(function (el, index, arr) {
            return el.type === "Zbiorka";
        })
        setCurrentPage(1);
        setListToPagination(collectionFiltered);
    }
    // pobieranie aktualnych postów
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = listToPagination.slice(indexOfFirstPost, indexOfLastPost);

    let pageNumbers = [];
    const totalPosts = listToPagination.length;
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    } if (pageNumbers <= 3) {
        pageNumbers = [];
    }
    // zmiana strony
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    };
    return (
        <>
            <section className="helpToWrapper" id="helpToSection">
                <p className="helpToWrapperTitle">Komu pomagamy?</p>
                <img src={decorationImgHelpTo} alt="dekoracja" className="decorationImgHelpTo" />
                <div className="helpToWrapperButtons">
                    <button onClick={foundationFilter} className="helpToWrapperBtn">Fundacjom</button>
                    <button onClick={organizationFilter} className="helpToWrapperBtn">Organizacjom pozarządowym</button>
                    <button onClick={collectionFilter} className="helpToWrapperBtn">Lokalnym zbiórkom</button>
                </div>
                <p className="helpToWrapperListTitle">W naszej bazie znajdziesz listę zweryfikowanych Fundacji, Organizcji z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
                <ul className="helpToWrapperList">
                    {currentPosts.map(el => <li key={el.index}><p className="helpToWrapperListName">{el.name}</p> <br />Cel i misja: {el.description}<br /><hr /></li>)}
                </ul>
                <ul className="paginationContainer">{pageNumbers.map(number => <li className="paginationContainerSide" key={number} onClick={() => paginate(number)}>{number}</li>)}</ul>
            </section>
        </>
    )
}
export default HelpTo;