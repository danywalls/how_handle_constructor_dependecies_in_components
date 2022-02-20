import { FormGroup } from '@angular/forms';

export abstract class AbstractFormWrapper {
  abstract myform: FormGroup;
  abstract errors: string[];
  abstract save(form: FormGroup): boolean;
}
