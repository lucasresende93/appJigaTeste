This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Introdução

Aplicativo desenvolvido em React Native CLI para testar e homologar os módulos de injeção eletrônica. O aplicativo se conecta à peça que será testada via Bluetooth e envia um comando para a peça. A peça inicia os testes e retorna um log. O aplicativo analisa o log e marca em verde todos os periféricos que passaram no teste, e em amarelo os periféricos que não foram aprovados.

Após o teste, o usuário acessa a tela de QR Code, faz a leitura, e os metadados da peça são enviados automaticamente para o banco de dados.


<img src="https://github.com/user-attachments/assets/30c65e13-f739-4b10-af3a-edd45beb6626" alt="imag1" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/9f0e1b43-fec9-41c1-bc58-09400f8f7cb5" alt="imag2" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/8662fc45-a271-491e-b8cb-9ab7f3fd513e" alt="imag3" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/7def90ee-7139-47e9-a1cf-d2e76cc573d5" alt="imag4" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/7def90ee-7139-47e9-a1cf-d2e76cc573d5" alt="imag5" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/4396056e-89a3-413d-9149-382b7246fb53" alt="imag7" style="width:200px; height:auto;">
<img src="https://github.com/user-attachments/assets/ef404349-11d3-4c72-b506-bc3dc9537ef3" alt="imag6" style="width:200px; height:auto;">

## Técnicas e tecnologias utilizadas

- ``Javascript``
- ``React Native CLI``
- ``Bluetooth Low Energy library``
- ``QR Code reader library``
- ``Stack Navigator``
- ``Axios``

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
