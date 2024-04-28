import cors from 'cors';
import express from 'express';
// import { createProxyMiddleware } from 'http-proxy-middleware.js';
import adminRoutes from './routes/adminRoutes.js';
import postRouter from './routes/postRoutes.js';
import sitemapRoute from './routes/sitemapRoute.js';
import pdfRouter from './routes/yearsRoutes.js';
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));
app.use('/public/temp',express.static("public/temp"))
app.use(cors(
    {
        origin : ["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET"],
        credential : true
    }
))
// app.use('/user',userRouter)
app.use('/admin',adminRoutes);
app.use('/pdf',pdfRouter)
app.use('/post',postRouter)
app.use('/',sitemapRoute)
export { app };
