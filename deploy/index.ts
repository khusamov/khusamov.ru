import NodeSsh from 'node-ssh';
import {join} from 'path';
import {sshConfig, deployConfig} from './deploy.config';

const scopeArg: string | undefined = process.argv.find(arg => arg.indexOf('--scope') === 0);
const scope = scopeArg ? scopeArg.split('=') : '';

if (scope) {

	const clientDeployConfig = deployConfig['particles.khusamov.ru'];
	const ssh = new NodeSsh;

	(async () => {
		try {
			await ssh.connect(sshConfig);

			const result = (
				await ssh.execCommand('rm -fr *', {
					cwd: clientDeployConfig.remoteDir
				})
			);

			const status = await ssh.putDirectory(
				join(__dirname, '..', clientDeployConfig.localDir),
				clientDeployConfig.remoteDir,
				{
					recursive: true,
					// Если concurrency > 1, то начинаются проблемы с выгрузкой файлов.
					// Описание concurrency см. https://www.npmjs.com/package/p-map
					concurrency: 1,
					tick(localPath, remotePath, error) {
						if (error) {
							console.log('tick error:', localPath, error)
						}
					}
				}
			);
		} catch (error) {
			console.log('error.code=', error.code);
			console.log(error);
		}
		process.exit(0);
	})();

} else {
	console.log('Не указан параметр --scope');
	process.exit(0);
}

