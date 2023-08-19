'use client'

import React from 'react'
import Link from 'next/link'

// https://nextjs.org/docs/app/api-reference/functions/use-selected-layout-segment
import {useSelectedLayoutSegments} from 'next/navigation'

interface IRootLinkProps {
	label?: string
}

export const HomeLink = ({label = 'Главная страница'}: IRootLinkProps) => {
	const segments = useSelectedLayoutSegments()
	if (segments.length === 0) {
		return label
	} else {
		return <Link href='/'>{label}</Link>
	}
}