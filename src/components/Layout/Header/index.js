import React, { useEffect, useState } from 'react';
import styles from './header.module.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, SearchInput } from '../../Common';
import { useRecoilState } from 'recoil';
import { isLoginAtom } from '../../../atom';
import { LogoutIcon, UserIcon } from '../../../assets/icon';
import useMe from '../../../hooks/useMe';

const Header = () => {
  const { me } = useMe();
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useRecoilState(isLoginAtom);
  const [keyword, setKeyword] = useState('');

  const goMy = () => navigate('/my');
  const onChange = (e) => setKeyword(e.currentTarget.value);
  const onClickLogin = () => navigate(`/auth/login`);

  const logout = () => {
    localStorage.clear();
    setIsLogin(false);
    alert('로그아웃 되었습니다');
  };

  const onClickSearch = (e) => {
    if (keyword.length === 0) {
      e.preventDefault();
      return alert('검색어를 입력해주세요 :)');
    }
    navigate(`/search/${keyword}`);
    setKeyword('');
  };

  useEffect(() => {
    if (me) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [me]);

  return (
    <header className={styles.wrap}>
      <Link to="/">
        <div className={styles.logo}>무비셀렉터</div>
      </Link>

      <form className={styles.right}>
        <SearchInput
          option="iconLocation"
          className={styles.searchInput}
          placeholder="검색어를 입력하세요."
          onClick={onClickSearch}
          onChange={onChange}
          value={keyword}
        />
        {!isLogin && (
          <Button
            children={'로그인'}
            className={styles.headerSign}
            onClick={onClickLogin}
          />
        )}
        {isLogin && (
          <aside className={styles.login}>
            <button onClick={goMy}>
              <UserIcon />
            </button>
            <button onClick={logout}>
              <LogoutIcon />
            </button>
          </aside>
        )}
      </form>
    </header>
  );
};

export default Header;
