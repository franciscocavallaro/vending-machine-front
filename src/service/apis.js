export const fetchLatestTransactions = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/latest-transactions');
        const data = await response.json();
        console.log('Latest Transactions:', data);
        return data;
    } catch (error) {
        console.error('Error fetching latest transactions:', error);
        throw error;
    }
};


