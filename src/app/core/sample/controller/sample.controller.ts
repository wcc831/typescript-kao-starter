import { Context } from 'koa';
import { sampleService } from 'src/app/core/sample/service/sample.service';

class SampleController {
  public add(ctx: Context) {
    ctx.body = sampleService.addSample()
  }
}

export const sampleController = new SampleController();