interface AvatarProps {
    url: string,
    alt: string
}

const Avatar: React.FC<AvatarProps> = ({ url, alt }) => {
    return (
        <div className="img-avatar">
            <img
                className='avatar'
                src={url}
                alt={alt} />
        </div>
    )
}
export default Avatar