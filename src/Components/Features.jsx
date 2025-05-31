import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShippingFast, FaLock, FaHeadset } from "react-icons/fa";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader } from "./ui/card";

const Features = () => {
  const [stats, setStats] = useState({
    registeredUsers: 0,
    parcelsBooked: 0,
    parcelsDelivered: 0,
  });

  useEffect(() => {
    AOS.init();

    const fetchStats = async () => {
      //   try {
      //     const usersResponse = await axios.get(
      //       "https://parcelpro-server.vercel.app/users"
      //     );
      //     const registeredUsers = usersResponse.data.length;
      //     const parcelsResponse = await axios.get(
      //       "https://parcelpro-server.vercel.app/allparcels"
      //     );
      //     const parcels = parcelsResponse.data;
      //     const parcelsBooked = parcels.length;
      //     const parcelsDelivered = parcels.filter(
      //       (parcel) => parcel.status === "Delivered"
      //     ).length;
      //     setStats({
      //       registeredUsers,
      //       parcelsBooked,
      //       parcelsDelivered,
      //     });
      //   } catch (error) {
      //     console.error("Error fetching stats:", error);
      //   }
    };

    fetchStats();
  }, []);

  return (
    <section className="py-16 ">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600">
          Explore the features and benefits of using our delivery system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 lg:px-20">
        {[
          {
            icon: <FaShippingFast className="text-6xl text-blue-600" />,
            title: "Super Fast Delivery",
            description: "Deliver parcels across 64 districts in record time.",
          },
          {
            icon: <FaLock className="text-6xl text-blue-600" />,
            title: "100% Parcel Safety",
            description:
              "Your parcels are handled with utmost care and security.",
          },
          {
            icon: <FaHeadset className="text-6xl text-blue-600" />,
            title: "24/7 Customer Support",
            description: "We are always here to assist you, anytime you need.",
          },
        ].map((feature, idx) => (
          <Card
            key={idx}
            className="shadow-lg hover:shadow-2xl transition-all"
            data-aos="fade-up"
            data-aos-delay={100 * (idx + 1)}
          >
            <CardHeader className="flex flex-col items-center text-center py-8">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-3xl font-semibold text-gray-800">
                {feature.title}
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-20 mb-12" data-aos="fade-up">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-4">
          Our Impact
        </h2>
        <p className="text-lg text-gray-600">
          Join thousands of happy customers who trust us with their deliveries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 lg:px-20">
        {[
          {
            label: "Parcels Booked",
            value: stats.parcelsBooked,
            icon: "🛒",
          },
          {
            label: "Parcels Delivered",
            value: stats.parcelsDelivered,
            icon: "📦",
          },
          {
            label: "Registered Users",
            value: stats.registeredUsers,
            icon: "👥",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-md p-6 flex items-center space-x-6"
            data-aos="fade-up"
            data-aos-delay={100 * (idx + 1)}
          >
            <div className="flex-shrink-0 bg-blue-100 text-blue-600 w-16 h-16 flex items-center justify-center rounded-full">
              <span className="text-2xl">{stat.icon}</span>
            </div>

            <div>
              <h3 className="text-4xl font-extrabold text-gray-800">
                <CountUp end={stat.value} duration={2.5} separator="," />
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
