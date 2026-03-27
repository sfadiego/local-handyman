export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Local Handyman</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Conectamos personas que necesitan servicios con profesionales verificados en tu área.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Servicios</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Plomería</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Electricidad</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Limpieza</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Carpintería</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Pintura</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Acerca de nosotros</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cómo funciona</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Para profesionales</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Soporte</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Centro de ayuda</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contacto</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Términos de servicio</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Política de privacidad</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            © 2024 Local Handyman. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <span className="sr-only">Instagram</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.017 0H7.984C3.467 0 0 3.467 0 7.984v4.032C0 16.533 3.467 20 7.984 20h4.033C16.533 20 20 16.533 20 12.016V7.984C20 3.467 16.533 0 12.017 0zm-3.017 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM16 6.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}