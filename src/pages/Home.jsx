
import React, { useContext } from 'react';

import { useEffect } from 'react';
import { Categories } from '../components/Categories';
import { Sort } from '../components/Sort';
import { PizzaBlock } from '../components/PizzaBlock';
import Sceleton from '../components/Sceleton';
import { SerchContext } from '../App';
import emptyCart from '../assets/img/empty-cart.png';

import { useSelector, useDispatch } from 'react-redux';
import { setCategoryID } from '../components/redux/Slices/Filter';
import qs from 'qs';
import { Link, useNavigate } from 'react-router-dom';
import { fetchPizzaRedux } from '../components/redux/Slices/pizzaSlice';

function Home() {

    const { items, statusLoading } = useSelector((state) => state.pizza);
    const { sortType, categoryId } = useSelector((state) => state.filterReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const isSearch = React.useRef(false);


    const { serchInput } = useContext(SerchContext);

    const onClickCategory = (id) => {

        dispatch(setCategoryID(id))
    };



    /* useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortNav = sortList.find((obj) => obj.sort === params.sortProperty);


            dispatch(setFilters({ ...params, sortNav })
            );
            isSearch.current = true;
        }

    }, []); */

    /* useEffect(() => {
        if (!isSearch.current) {
            fetchPizzas();
        }
        isSearch.current = false

    }, [categoryId, sortType, serchInput]); */


    useEffect(() => {
        fetchPizzas();

    }, [categoryId, sortType, serchInput]);

    const fetchPizzas = () => {

        const sortBy = sortType.sort.replace('-', '');
        const oredr = sortType.sort.includes('-') ? 'asc' : 'desc';
        const categorId = categoryId > 0 ? `category=${categoryId}` : '';
        const search = serchInput ? `&search=${serchInput}` : '';

        dispatch(fetchPizzaRedux({
            sortBy,
            oredr,
            categorId,
            search
        }));

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sortType.sort,
            categoryId,
        });

        navigate(`?${queryString}`);
    }, [categoryId, sortType, navigate]);



    return (
        <>
            <div className="content__top">
                <Categories value={categoryId} onClickCategory={onClickCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {
                    statusLoading === 'error' ?
                        <div className="cart cart--empty">
                            <h2>Произошла ошибка <span>😕</span></h2>
                            <p>
                                Вероятней всего, проблема на сервере.<br />
                                Пожалуйста повторите через 5 минут.
                            </p>
                            <img src={emptyCart} alt="Error" />
                            <Link to="/" className="button button--black" >
                                <span>Вернуться назад</span>
                            </Link>

                        </div>
                        : statusLoading === 'loading' ? [...new Array(6)].map((_, i) => <Sceleton key={i} />) :
                            items.map((obj) => (
                                <PizzaBlock
                                    key={obj.id}
                                    {...obj}
                                />
                            ))
                }



            </div>
        </>
    );
}

export default Home;


