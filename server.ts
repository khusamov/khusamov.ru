import Koa, {Context} from 'koa';
import Router from 'koa-router';
import Next from 'next';

const port = process.env.PORT ? parseInt(process.env.PORT, 10) || 3000 : 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = new Koa();
	const router = new Router();

	router.get('/post/:id', async (ctx: Context) => {
		await app.render(ctx.req, ctx.res, '/post', ctx.params);
	});

	router.get('*', async (ctx: Context) => {
		await handle(ctx.req, ctx.res);
	});

	server.use(async (ctx: Context, next: Function) => {
		ctx.res.statusCode = 200;
		await next();
	});

	server.use(router.routes());
	server.listen(port, () => {
		console.log(`> Ready on http://localhost:${port}`)
	});
});