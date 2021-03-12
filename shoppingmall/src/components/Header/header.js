import './header.scss'


export default function Header () {
  return (
    <div className='header'>
      <button className='header-left'>MENU</button>
      <h1 className='header-center'>BRAND</h1>
      <div className='header-right'>
        <div className='top'>
          <button className='btn'>장바구니</button>
          <button className='btn'>로그인</button>
          <button className='btn'>회원가입</button>
          <button className='btn'>주문조회</button>
          <button className='btn'>마이페이지</button>
          <button className='btn'>고객센터</button>
        </div>
        <div className='bottom'>
          <button className='btn'>뷰티팁</button>
          <button className='btn'>구매후기</button>
          <input className='input' type='text' placeholder="제품 검색"/>
        </div>
      </div>
    </div>
  )
}