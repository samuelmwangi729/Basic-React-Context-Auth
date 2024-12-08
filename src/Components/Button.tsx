import { FC } from 'react'
interface buttonProps {
    title: string;
    handleSubmit: () => void
}

const Button: FC<buttonProps> = ({ title, handleSubmit }) => {
    return (
        <button onClick={handleSubmit} style={{padding:2,backgroundColor:'red',border:'none',color:'whitesmoke'}}>
            {title}
        </button>
    )
}

export default Button
