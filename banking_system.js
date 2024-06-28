import BankAccount from './bank_account.js';

const updateSaldoDisplay = (balance) => {
    document.getElementById('saldoDisplay').textContent = `Saldo saat ini: ${balance}`;
};

const main = async () => {
    const account = new BankAccount(0);

    document.getElementById('tambahSaldoBtn').addEventListener('click', async () => {
        const amount = parseFloat(prompt('Masukkan jumlah saldo yang ingin ditambahkan:', '0'));
        if (isNaN(amount)) {
            alert('Jumlah tidak valid');
            return;
        }
        try {
            const result = await account.deposit(amount);
            console.log(result);
            updateSaldoDisplay(account.convertToRupiah(account.balance));
        } catch (error) {
            console.error(error);
            alert(error);
        }
    });

    document.getElementById('kurangiSaldoBtn').addEventListener('click', async () => {
        const amount = parseFloat(prompt('Masukkan jumlah saldo yang ingin dikurangi:', '0'));
        if (isNaN(amount)) {
            alert('Jumlah tidak valid');
            return;
        }
        try {
            const result = await account.withdraw(amount);
            console.log(result);
            updateSaldoDisplay(account.convertToRupiah(account.balance));
        } catch (error) {
            console.error(error);
            alert(error);
        }
    });

    updateSaldoDisplay(account.convertToRupiah(account.balance));
};

main();
