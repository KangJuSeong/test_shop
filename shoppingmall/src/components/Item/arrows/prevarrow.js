import './prevarrow.scss'


export default function PrevArrow (props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className='prev-arrow'>
      <img src='/images/prevarrow.png' className='arrow-img'/>
    </div>
  )
}