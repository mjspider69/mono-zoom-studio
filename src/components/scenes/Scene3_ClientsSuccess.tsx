export const Scene3_ClientsSuccess = () => {
  const industries = [
    'E-Commerce', 'Healthcare', 'Real Estate', 'Education',
    'Technology', 'Fashion', 'Food & Beverage', 'Finance'
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Global',
      text: 'gumming4u transformed our digital presence. Their strategic approach increased our leads by 300%.'
    },
    {
      name: 'Michael Chen',
      company: 'StyleHub Fashion',
      text: 'Outstanding creativity and execution. The team delivered beyond our expectations every time.'
    },
    {
      name: 'Emily Rodriguez',
      company: 'HealthFirst Clinic',
      text: 'Professional, innovative, and results-driven. Our best marketing partner by far.'
    }
  ];

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white px-8 py-12 overflow-y-auto">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-5xl md:text-6xl font-light text-center mb-12 drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          Scene 3: Clients & Success
        </h2>

        <div className="mb-16">
          <h3 className="text-3xl font-light text-center mb-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center hover:bg-gray-100 transition-colors"
              >
                <p className="text-lg font-light drop-shadow-[0_0_12px_rgba(0,0,0,0.1)]">
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-light text-center mb-8 drop-shadow-[0_0_20px_rgba(0,0,0,0.2)]">
            Client Testimonials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 p-8 rounded-lg border border-gray-200"
              >
                <p className="text-gray-700 italic mb-6 drop-shadow-[0_0_12px_rgba(0,0,0,0.1)]">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-light drop-shadow-[0_0_10px_rgba(0,0,0,0.1)]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
