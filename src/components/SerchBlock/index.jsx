

import React, { useCallback, useContext, useState } from 'react';
import debounce from 'lodash.debounce';

import serchIcon from '../../assets/img/285651_search_icon.png';
import closeIcon from '../../assets/img/close_icon.png';
import Styles from './Serch.module.scss';
import { SerchContext } from '../../App';

function Serch() {
    const [value, setValue] = useState('');
    const { setSerchInput } = useContext(SerchContext);
    const inputRef = React.useRef();

    const onClickClear = () => {
        setValue('');
        setSerchInput('');
        inputRef.current.focus();
    };

    const onChangeInput = useCallback(
        debounce((str) => {
            setSerchInput(str);
        }, 500), [Serch]
    );

    const onChangeValue = event => {
        setValue(event.target.value);
        onChangeInput(event.target.value);
    };

    return (

        <div className={Styles.root}>
            <img className={Styles.SerchIcon} src={serchIcon} alt="serch" />
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeValue}
                className={Styles.Input} type="text" placeholder='Поиск пиццы...'

            />
            {value && <img onClick={onClickClear} className={Styles.closeIcon} src={closeIcon} alt="serch" />}
        </div>

    );
}

export default Serch;