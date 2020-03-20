import { db, transaction } from 'core/common/db';
import { logFunc } from 'core/common/logger'
import { Sample } from 'core/sample/model/sample'

const sampleRepos = db.getRepository(Sample);

class SampleService {
  @logFunc
  @transaction
  public addSample() {}

  @logFunc
  @transaction
  public getSample() {}
}

export const sampleService = new SampleService();