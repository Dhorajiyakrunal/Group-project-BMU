import Image from "next/image"

const Logo = () => {
    return (
        <Image
            src='https://www.audemarspiguet.com/etc.clientlibs/ap-com/ui/clientlibs/publish/resources/static/audemars-piguet-logo.svg'
            width={150}
            height={150}
            alt="Audemars Piguet logo"
        />
    )
}

export default Logo
