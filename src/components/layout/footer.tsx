export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-6 text-center text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} L&S Flex. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
