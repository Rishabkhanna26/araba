import Image from 'next/image'
import Link from 'next/link'

const BrandLogo = ({ className = '', imageClassName = '', textClassName = '', showText = true }) => {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 whitespace-nowrap ${className}`.trim()}>
      <Image
        src="/580649185_17850873852585947_4178974893598830815_n.jpg"
        alt="ARABA Coffee logo"
        width={44}
        height={44}
        className={`h-10 w-10 rounded-full object-cover ring-2 ring-araba-copper/40 sm:h-11 sm:w-11 ${imageClassName}`.trim()}
        priority
      />
      {showText ? (
        <span className={`text-2xl font-bold tracking-wide text-araba-olive sm:text-3xl ${textClassName}`.trim()}>
          ARABA
        </span>
      ) : null}
    </Link>
  )
}

export default BrandLogo
