// link https://bigfrontend.dev/zh/typescript/OmitThisParameter

// your code here, please don't use OmitThisParameter<T> in your code
type MyOmitThisParameter<T> = T extends (...args: any[]) => infer R ? () => R : never;

