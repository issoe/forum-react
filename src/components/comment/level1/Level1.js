import './style.css'

export default function Level1({ level, name, comment }) {
    let result;
    if (level == 1) {
        result = <div className='my-padding-1'>
            {name} : {comment}
        </div>
    } else if (level == 2) {
        result = <div className='my-padding-2'>{name} : {comment}</div>
    } else {
        result = <div className='my-padding-3'>{name} : {comment}</div>
    }

    return (
        <div>
            {result}
        </div>
    )
}