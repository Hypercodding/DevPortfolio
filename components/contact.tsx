"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SectionHeading from "./section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    console.log(values);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
      toast.success("Message sent!", {
        description: "Thank you for your message. I'll get back to you soon.",
      });
    }, 1500);
  }

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <SectionHeading title="Contact Me" subtitle="Get in touch with me" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <CardContent className="flex h-full flex-col justify-between p-6">
                <div>
                  <h3 className="mb-6 text-2xl font-bold">Let&apos;s Talk</h3>
                  <p className="mb-8 text-muted-foreground">
                    Feel free to reach out if you&apos;re looking for a
                    developer, have a question, or just want to connect.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-muted-foreground">
                          Lahore, Punjab, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:ahmadraza600@gmail.com"
                          className="text-muted-foreground hover:text-primary hover:underline"
                        >
                          ahmadraza600@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-primary/10 p-3 text-primary">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-medium">Phone</h4>
                        <a
                          href="tel:+923074722794"
                          className="text-muted-foreground hover:text-primary hover:underline"
                        >
                          +92 (307) 472-2794
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <iframe
                    title="Location Map"
                    className="h-[200px] w-full rounded-md border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948551!3d37.75781499644172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1623252076085!5m2!1sen!2sus"
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-6 text-2xl font-bold">Send a Message</h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Message subject" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
