function php {
    & "D:\php8\php.exe" @args
}
# Export the function to the current scope
Set-Alias -Name php_internal -Value php -ErrorAction SilentlyContinue
