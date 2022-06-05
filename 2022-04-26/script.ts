type Space = ' ' | '\n';
type Trim<T extends string> = T extends `${Space}${infer U}` ? Trim<U> : T extends `${infer U}${Space}` ? Trim<U> : T;

