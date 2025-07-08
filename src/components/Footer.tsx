export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
            <div className="container mx-auto">
                <p>&copy; {new Date().getFullYear()} セキセイ All rights reserved.</p>
            </div>
        </footer>
    );
}