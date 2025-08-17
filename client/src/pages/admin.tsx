import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Mail, User, Calendar, MessageSquare, Trash2, Eye } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AdminMessagesSkeleton } from "@/components/loading-skeletons";

interface ContactMessage {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export default function AdminPage() {
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);

  const { data: messages, isLoading, error } = useQuery({
    queryKey: ["/api/contact-messages"],
    queryFn: async () => {
      const response = await fetch("/api/contact-messages");
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      return response.json() as Promise<ContactMessage[]>;
    },
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isLoading) {
    return (
      <PageTransition>
        <div className="bg-dark-bg text-slate-100 font-sans min-h-screen">
          <Navigation />
          <div className="pt-20 pb-20">
            <div className="max-w-7xl mx-auto px-6">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Admin <span className="gradient-text">Dashboard</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                  Loading contact messages...
                </p>
              </motion.div>
              <AdminMessagesSkeleton />
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  if (error) {
    return (
      <PageTransition>
        <div className="bg-dark-bg text-slate-100 font-sans min-h-screen">
          <Navigation />
          <div className="pt-20 flex items-center justify-center min-h-screen">
            <div className="text-center">
              <p className="text-red-400">Error loading messages: {error.message}</p>
            </div>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans min-h-screen">
        <Navigation />
        
        <div className="pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Admin <span className="gradient-text">Dashboard</span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                View and manage contact form submissions
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Messages List */}
              <div className="lg:col-span-2">
                <Card className="bg-dark-secondary border-slate-600">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Mail className="text-accent-blue" size={24} />
                      Contact Messages ({messages?.length || 0})
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!messages || messages.length === 0 ? (
                      <div className="text-center py-12 text-slate-400">
                        <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                        <p>No messages received yet</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {messages.map((message, index) => (
                          <motion.div
                            key={message.id}
                            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                              selectedMessage?.id === message.id
                                ? "border-accent-blue bg-accent-blue/10"
                                : "border-slate-600 bg-dark-tertiary hover:border-slate-500"
                            }`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={() => setSelectedMessage(message)}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <User size={16} className="text-accent-blue" />
                                  <span className="font-medium">
                                    {message.firstName} {message.lastName}
                                  </span>
                                  <Badge variant="outline" className="text-xs">
                                    {message.email}
                                  </Badge>
                                </div>
                                <h3 className="font-semibold text-slate-200 mb-2">
                                  {message.subject}
                                </h3>
                                <p className="text-slate-400 text-sm line-clamp-2">
                                  {message.message}
                                </p>
                                <div className="flex items-center gap-2 mt-3 text-xs text-slate-500">
                                  <Calendar size={12} />
                                  {formatDate(message.createdAt)}
                                </div>
                              </div>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setSelectedMessage(message);
                                }}
                              >
                                <Eye size={16} />
                              </Button>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Message Detail */}
              <div className="lg:col-span-1">
                <Card className="bg-dark-secondary border-slate-600 sticky top-24">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="text-accent-purple" size={24} />
                      Message Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {selectedMessage ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4"
                      >
                        <div>
                          <label className="text-sm font-medium text-slate-400">From</label>
                          <p className="text-slate-200">
                            {selectedMessage.firstName} {selectedMessage.lastName}
                          </p>
                          <p className="text-sm text-accent-blue">{selectedMessage.email}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-slate-400">Subject</label>
                          <p className="text-slate-200">{selectedMessage.subject}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-slate-400">Date</label>
                          <p className="text-slate-200">{formatDate(selectedMessage.createdAt)}</p>
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium text-slate-400">Message</label>
                          <div className="bg-dark-tertiary p-3 rounded-lg mt-2">
                            <p className="text-slate-200 whitespace-pre-wrap">
                              {selectedMessage.message}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          <Button 
                            className="flex-1 bg-accent-blue hover:bg-accent-blue/80"
                            onClick={() => window.open(`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`)}
                          >
                            Reply
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="text-center py-8 text-slate-400">
                        <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
                        <p>Select a message to view details</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}