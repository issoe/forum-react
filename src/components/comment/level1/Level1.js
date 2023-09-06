import './style.css'

export default function Level1({ level, firstName, lastName, comment }) {
    let result;
    if (level === 1) {
        result = <div className='my-padding-1'>
            {firstName} - {lastName} : {comment}
        </div>
    } else if (level === 2) {
        result = <div className='my-padding-2'>{firstName} - {lastName} : {comment}</div>
    } else {
        result = <div className='my-padding-3'>{firstName} - {lastName} : {comment}</div>
    }

    return (
        <div>
            {result}
        </div>
    )
}