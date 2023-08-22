import {useSelectedLayoutSegments} from 'next/navigation'

export function useActiveUrl(): string {
	const selectedSegments = useSelectedLayoutSegments()
	return '/' + selectedSegments.join('/')
}