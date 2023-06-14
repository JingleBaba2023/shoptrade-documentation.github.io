# Project Setup

## Github Setup

Get the codebase from **Github** Repository

```bash
  git clone https://github.com/JingleBaba2023/Shopify-Custom-Base 
```

To know more about branches and their workflow <a class="green-link" href="/workflow/#github-flow">Click here</a>

## Shopify 

**To get started**

- Clone the live theme and rename it to ***Dev Theme - {Your name}***
- Copy the theme_id , we will require this on ***.env*** file.
- Create a ***.env*** file. Check ***.sample-env*** file for the sample env file.

::: warning Aware
Make sure you have [Shopify-Cli](https://shopify.dev/docs/themes/tools/cli) installed
:::

## Codebase Setup

Follow the below commands to setup and start local sever on your system

<code-group>
  <code-block title="YARN" style="color: red">

  ```bash
    yarn 
    yarn start
  ```
  </code-block>
  <code-block title="NPM">

  ```bash
    npm install
    npm start
  ```
  </code-block>
</code-group>


## Deploy local code to any other theme

To deploy the changes on any theme simply run 

<code-group>
  <code-block title="YARN" style="color: red">

  ```bash
    yarn deploy
  ```
  </code-block>
  <code-block title="NPM">

  ```bash
    npm deploy
  ```
  </code-block>
</code-group>

When prompt to select the theme , select desired theme from the list.

