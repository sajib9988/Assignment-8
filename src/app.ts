import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import router from './app/route.ts';
import globalErrorHandler from './app/utils/globalErrorHandler';








const app: Application = express();
app.use(cors());
// app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api', router);


app.get('/', (req: Request, res: Response) => {
  res.send({
      Message: "Bike Service server Running.."
  })
});

app.use(globalErrorHandler)
  

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: "API NOT FOUND!",
        error: {
            path: req.originalUrl,
            message: "Your requested path is not found!"
        }
    })
})

export default app;