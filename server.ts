import Koa, {Context} from 'koa';
import Router from 'koa-router';
import Next from 'next';

type TKoaNextFunction = () => Promise<any>;

const defaultPort = 3000;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) || defaultPort : defaultPort;
const isDevelopment = process.env.NODE_ENV !== 'production';
const nextApplication = Next({dev: isDevelopment});

(async () => {
	await nextApplication.prepare();

	const server = new Koa();
	const router = new Router();
	const handle = nextApplication.getRequestHandler();

	router.get('/post/:id', async (ctx: Context) => {
		await nextApplication.render(ctx.req, ctx.res, '/post', ctx.params);
	});

	router.get('*', async (ctx: Context) => {
		await handle(ctx.req, ctx.res);
	});

	server.use(async (ctx: Context, next: TKoaNextFunction) => {
		ctx.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());
	server.listen(port, () => {
		console.log(`> Next Application ready on 'http://localhost:${port}'.`)
	});
})();