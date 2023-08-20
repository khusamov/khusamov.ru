import type {StaticImport} from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface IPictureProps {
	title?: string
	src: string | StaticImport
}

export function Picture({title, src}: IPictureProps) {
	return (
		<div>
			<div><Image src={src} width={0} height={0} unoptimized alt={title ?? ''}/></div>
			{title && <div>{title}</div>}
		</div>
	)
}