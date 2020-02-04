import React, {FunctionComponent, useEffect, useState, CSSProperties} from 'react';
import cn from 'classnames';
import getRepositoryList, {IRepository} from '../../functions/getRepositoryList';
import useGithubReposStyles from './useGithubReposStyles';

interface IGithubReposProps {
	className?: string;
	style?: CSSProperties;
}

//
// TODO Переписать на https://rxjs.dev/api/fetch/fromFetch
// https://medium.com/ngx/introducing-to-reactive-programming-d1337fbead32
//

/**
 * Основы реактивного программирования с использованием RxJS.
 * @link https://codesandbox.io/s/ispytanie-rxjs-k1psg
 * @link https://medium.com/ngx/introducing-to-reactive-programming-with-rxjs-3583345faec1
 */

/**
 * GithubRepos.
 */
const GithubRepos: FunctionComponent<IGithubReposProps> = (
	({children, className, style}) => {



		const [repositories, setRepositories] = useState<IRepository[]>([]);
		useEffect(() => {

			const fetchRepos = async () => {
				setRepositories(await getRepositoryList('khusamov'))
			};

			fetchRepos();

		});



		const css = useGithubReposStyles();
		return (
			<div className={cn(css.root, className)} style={style}>
				<div>
					{repositories.map((repository, index) => (
						<p key={index}>
							{repository.name}
							<br />
							{repository.description}
						</p>
					))}
				</div>
			</div>
		)
	}
);

export default GithubRepos;