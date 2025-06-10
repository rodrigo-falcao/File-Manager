import fileManager from './fileManager.js';
import readlineSync from 'readline-sync';
import path from 'path';
import url from 'url';

async function main() {
    const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
    const baseDir = path.join(__dirname, 'my_files');

    fileManager.createDirectory(baseDir)
    
    while (true) {
        console.log('\nMenu:');
        console.log('1. Criar arquivo');
        console.log('2. Listar Arquivos');
        console.log('3. Ler Arquivo');
        console.log('4. Escrever Arquivo');
        console.log('5. Deletar Arquivo');
        console.log('6. Sair');

        const choice = readlineSync.question('Escolha um numero: ');

        try {
            switch (choice) {
            case '1':
                const fileName = readlineSync.question('Digite o nome do arquivo: ');
                const fileContent = readlineSync.question('Digite o conteúdo do novo arquivo (ou deixe em branco) ');
                const createFilePath = path.join(baseDir, fileName);
                const fileMessage = await fileManager.createFile(createFilePath, fileContent);
                console.log('Arquivo criado com sucesso.');
                break;
            case '2':
                const files = await fileManager.listFiles(baseDir);
                console.log('Arquivos no diretorio:', files.length > 0 ? files.join(', ') : 'Nenhum arquivo encontrado.');
                break;
            case '3':
                const readFileName = readlineSync.question('Digite o nome e extensao do arquivo para ler: ');
                const readFilePath = path.join(baseDir, readFileName);
                const content = await fileManager.readFile(readFilePath);
                console.log('Conteúdo do arquivo:', content);
                break;
            case '4':
                const writeFileName = readlineSync.question('Digite o nome e extensao do arquivo para escrever: ');
                const writeFilePath = path.join(baseDir, writeFileName);
                const writeContent = readlineSync.question('Digite o conteúdo para escrever no arquivo: ');
                const writeMessage = await fileManager.writeFile(writeFilePath, writeContent);
                console.log(writeMessage);
                break;
            case '5':
                const deleteFileName = readlineSync.question('Digite o nome e extensao do arquivo para deletar: ');
                const deleteFilePath = path.join(baseDir, deleteFileName);
                await fileManager.deleteFile(deleteFilePath);
                console.log(`Arquivo '${deleteFileName}' deletado com sucesso.`);
                break;
            case '6':
                console.log('Saindo...');
                return;
            default:
                console.log('Opção inválida. Tente novamente.');
        }
        } catch (err) {
            console.error(err);
        }
    }
}

main();