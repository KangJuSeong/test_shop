import './nextarrow.scss'


export default function NextArrow (props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='next-arrow'>
      <img src='/images/nextarrow.png' className='arrow-img'/>
    </div>
  )
}
