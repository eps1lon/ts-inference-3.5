## usage
```bash
$ git clone https://github.com/eps1lon/ts-inference-3.5.git
$ cd ts-inference-3.5
$ yarn
$ yarn start
index.ts:10:7 - error TS2322: Type 'false' is not assignable to type 'true'.
$ git checkout fixed
$ yarn start
# no errors
```