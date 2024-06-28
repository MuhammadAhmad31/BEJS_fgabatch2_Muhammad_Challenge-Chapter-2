class BankAccount {
    constructor(initialBalance = 0) {
        this.balance = initialBalance;
    }

    convertToRupiah = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(number);
    }

    _processTransaction = (amount, type) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (amount <= 0) {
                    reject('Invalid transaction amount.');
                } else if (type === 'deposit') {
                    this.balance += amount;
                    resolve(`Deposit successful. New balance: ${this.convertToRupiah(this.balance)}`);
                } else if (type === 'withdraw') {
                    if (amount > this.balance) {
                        reject('Amount exceeds current balance.');
                    } else {
                        this.balance -= amount;
                        resolve(`Withdrawal successful. New balance: ${this.convertToRupiah(this.balance)}`);
                    }
                }
            }, 1000);
        });
    }


    deposit = (amount) => {
        return this._processTransaction(amount, 'deposit');
    }

    withdraw = (amount) => {
        return this._processTransaction(amount, 'withdraw');
    }

}

const main = async () => {
    const account = new BankAccount(1000000);

    try {
        console.log(await account.deposit(500000));
        console.log(await account.withdraw(300000));
    } catch (error) {
        console.error(error);
    }
};

main();
